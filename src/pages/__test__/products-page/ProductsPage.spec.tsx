import {ReactNode} from 'react';
import {afterAll, afterEach, beforeAll, describe, test, expect} from 'vitest';
import {render, RenderResult, screen} from '@testing-library/react';

import {AppProvider} from '../../../context/AppProvider.tsx';
import {ProductsPage} from '../../ProductsPage.tsx';
import {MockWebServer} from '../../../tests/MockWebServer.ts';
import {givenAProducts, givenNoProducts} from './ProductsPage.fixture.ts';
import {verifyHeader} from './productsPage.helpers.ts';

const mockWebServer = new MockWebServer();

describe('Products page', () => {
  beforeAll(() => mockWebServer.start());
  afterEach(() => mockWebServer.resetHandlers());
  afterAll(() => mockWebServer.close());

  test('Loads and displays title', async () => {
    givenAProducts(mockWebServer);

    renderComponent(<ProductsPage/>);

    await screen.findAllByRole('heading', {name: 'Product price updater'});
  });

  test('should show an empty table if there are no data', async () => {
    givenNoProducts(mockWebServer);

    renderComponent(<ProductsPage/>);

    const rows = await screen.findAllByRole('row');

    expect(rows.length).toBe(1);

    verifyHeader(rows[0]);

  });
});


function renderComponent(component: ReactNode): RenderResult {
  return render(<AppProvider>{component}</AppProvider>);
}

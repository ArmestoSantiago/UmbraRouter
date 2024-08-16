import { describe, it, expect, beforeEach, vi } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { Router } from '../src/Router';
import { getCurrentPath } from '../utils/getCurrentPath';
import { Route } from '../src/Route';
import { Link } from '../src/Link';

vi.mock('../utils/getCurrentPath.js', () => ({
  getCurrentPath: vi.fn()
}));

describe('Router', () => {
  beforeEach(() => {
    cleanup();
    vi.clearAllMocks();
  });
  it('Should render without problems', () => {
    render(<Router routes={[]} />);
    expect(true).toBeTruthy();
  });

  it('Should render 404 if no routes match', () => {
    render(<Router routes={[]} defaultComponent={() => <h1>404</h1>} />);
    console.log(screen.debug());
    expect(screen.getByText('404')).toBeTruthy();
  });

  it('Should render the component of the first route that matches ');

  it('should render the component of the first route that matches', () => {
    getCurrentPath.mockReturnValue('/about');
    const routes = [
      {
        path: '/about',
        Component: () => <h1>About</h1>
      },
      {
        path: '/',
        Component: () => <h1>Home</h1>
      }

    ];

    render(<Router routes={routes} />);
    expect(screen.getByText('About')).toBeTruthy();
  });

  it('should navigate using links', async () => {
    getCurrentPath.mockReturnValueOnce('/');

    render(
      <Router>
        <Route
          path='/' Component={() => {
            return (
              <>
                <h1>Home</h1>
                <Link to='/about'>Go to About</Link>
              </>
            );
          }}
        />
        <Route path='/about' Component={() => <h1>About</h1>} />
      </Router>
    );

    const anchor = screen.getByText('Go to About');
    fireEvent.click(anchor);

    const aboutTitle = await screen.findByText('About');

    expect(aboutTitle).toBeTruthy();
  });
});

import React from 'react';
import '../styles/skeleton.css';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Page load error caught by ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="route-error-container" role="alert">
          <h2 className="route-error-heading">Unable to load this page</h2>
          <p className="route-error-text">
            A network error occurred while loading this section. Please check your internet connection and try again.
          </p>
          <button
            type="button"
            className="route-error-btn"
            onClick={() => window.location.reload()}
          >
            Reload Page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(_error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '20px', backgroundColor: '#ffdada', color: '#900', height: '100vh', display: 'flex', flexDirection: 'column' }}>
          <h2>Oops! The Pokemon Portfolio application crashed.</h2>
          <p>Please copy the text below and send it back to me so I can fix it for you:</p>
          <pre style={{ whiteSpace: 'pre-wrap', backgroundColor: '#fff', padding: '10px', border: '1px solid #900', overflow: 'auto', flex: 1 }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo && this.state.errorInfo.componentStack}
          </pre>
          <button 
             onClick={() => window.location.reload()} 
             style={{ padding: '10px', marginTop: '20px', cursor: 'pointer', alignSelf: 'flex-start' }}>
            Reload Page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

import React, { Component, ErrorInfo, ReactNode } from 'react';
import { RefreshCw, Home, AlertCircle } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Tahiri Foundation UK Application Error caught by boundary:', error, errorInfo);
  }

  private handleReturnHome = () => {
    this.setState({ hasError: false });
    window.location.hash = '#/';
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div id="error-boundary-screen" className="min-h-screen flex flex-col justify-center items-center bg-white text-[#111827] px-4 py-20">
          <div className="max-w-md w-full text-center space-y-6">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#EEF3FF] text-[#0B3095] mx-auto border border-[#0B3095]/15">
              <AlertCircle className="w-7 h-7" />
            </div>
            <h1 className="font-serif-display text-3xl sm:text-4xl font-bold text-[#0B3095]">
              Something went wrong
            </h1>
            <p className="text-sm text-[#5B6472] leading-relaxed">
              We encountered an unexpected display issue. Please return to the Home page or reload to continue exploring Tahiri Foundation UK.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                id="error-return-home-btn"
                onClick={this.handleReturnHome}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#0B3095] hover:bg-[#1746B8] text-white font-semibold text-sm transition-all duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0B3095] min-h-[44px]"
              >
                <Home className="w-4 h-4" />
                <span>Return Home</span>
              </button>
              <button
                id="error-reload-btn"
                onClick={() => window.location.reload()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-[#E4E9F2] bg-white text-[#5B6472] hover:text-[#0B3095] hover:bg-[#F7F9FF] font-semibold text-sm transition-all duration-200 focus:outline-none min-h-[44px]"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Reload Page</span>
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

import React from 'react';

class HeyAlert extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isDismissed: false };
    this.DismissedAlert = this.DismissedAlert.bind(this);
  }

  DismissedAlert() {
    this.setState({
      isDismissed: true,
    });
  }

  render() {
    const { message, type, id, title } = this.props;

    return this.state.isDismissed ? null : (
      <div className={`border-l-4 p-4 mb-4 rounded-lg shadow-lg ${type === 'success' ? 'bg-green-100 border-green-500 text-green-700' : ''} ${type === 'warning' ? 'bg-yellow-100 border-yellow-500 text-yellow-700' : ''} ${type === 'error' ? 'bg-red-100 border-red-500 text-red-700' : ''}`}>
        <div className="flex justify-between items-start">
          <div>
            <h2 id={id} className="text-lg font-semibold mb-1">{title}</h2>
            <p className="text-sm mb-3">{message}</p>
          </div>
          <button
            className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600 hover:text-gray-200 active:bg-blue-700 active:scale-95 transition-all duration-300 shadow-lg"
            onClick={this.DismissedAlert}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    );
  }
}

export default HeyAlert;

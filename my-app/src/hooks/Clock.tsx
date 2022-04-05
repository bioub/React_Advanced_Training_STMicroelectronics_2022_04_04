import React, { Component, useEffect, useState } from 'react';
import { format as formatDate } from 'date-fns';

type Props = {
  format?: string;
  delay?: number;
};

// type State = {
//   now: Date;
// }

// class Clock extends Component<Props, State> {
//   state: State = {
//     now: new Date(),
//   };
//   interval: any;
//   componentDidMount() {
//     console.log('componentDidMount');

//     const { delay = 1000 } = this.props;
//     this.interval = setInterval(() => {
//       this.setState({
//         now: new Date(),
//       });
//     }, delay);
//   }
//   componentDidUpdate(prevProps: Props) {
//     const { delay = 1000 } = this.props;

//     if (prevProps.delay === delay) {
//       return;
//     }

//     clearInterval(this.interval);
//     this.interval = setInterval(() => {
//       this.setState({
//         now: new Date(),
//       });
//     }, delay);
//   }
//   componentWillUnmount() {
//     clearInterval(this.interval);
//   }
//   render() {
//     const { format = 'HH:mm:ss' } = this.props;
//     const { now } = this.state;
//     return (
//       <div className="Clock">
//         Clock : {formatDate(now, format)}
//       </div>
//     );
//   }
// }

function useClock(delay: number) {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, delay);
    return () => {
      clearInterval(interval);
    };
  }, [delay]);

  return now;
}

// function Clock({ format = 'HH:mm:ss', delay = 1000 }: Props) {
//   const [now, setNow] = useState(new Date());

//   // useEffect(() => {
//   //   console.log('componentDidMount + componentDidUpdate');
//   //   return () => {
//   //     console.log('componentWillUnmount + componentWillUpdate');
//   //   }
//   // });

//   // useEffect(() => {
//   //   console.log('componentDidMount');
//   //   return () => {
//   //     console.log('componentWillUnmount');
//   //   }
//   // }, []);

//   // useEffect(() => {
//   //   console.log('componentDidMount + componentDidUpdate (only if delay change)');
//   //   return () => {
//   //     console.log('componentWillUnmount + componentWillUpdate (only if delay change)');
//   //   }
//   // }, [delay]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setNow(new Date());
//     }, delay);
//     return () => {
//       clearInterval(interval);
//     }
//   }, [delay]);

//   return (
//     <div className="Clock">
//       Clock : {formatDate(now, format)}
//     </div>
//   );
// }

function Clock({ format = 'HH:mm:ss', delay = 1000 }: Props) {
  const now = useClock(delay);

  return <div className="Clock">Clock : {formatDate(now, format)}</div>;
}

export default Clock;

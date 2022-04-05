import React, { ChangeEvent, Component, FormEvent, PointerEvent, useState } from 'react';

// class RegisterForm extends Component {
//   state = {
//     username: 'Romain',
//     gender: 'm',
//     subscription: true,
//   }
//   handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const name = event.target.name;
//     const value = (event.target.type === 'checkbox') ? (event.target as HTMLInputElement).checked : (event.target as HTMLInputElement).value;

//     this.setState({
//       [name]: value,
//     });
//   }
//   handleSubmit = (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     console.log(this.state);
//   }
//   render() {
//     const { username, gender, subscription } = this.state;
//     return (
//       <form className="RegisterForm" onSubmit={this.handleSubmit}>
//         <div>
//           Username: <input type="text" name="username" value={username} onChange={this.handleChange} />
//         </div>
//         <div>
//           Gender : <select value={gender} name="gender" onChange={this.handleChange}>
//             <option value="f">Female</option>
//             <option value="m">Male</option>
//           </select>
//         </div>
//         <div>
//           Subscribe to the newsletter :
//           <input type="checkbox" name="subscription" checked={subscription} onChange={this.handleChange} />
//         </div>
//         <div>
//           <button>Submit</button>
//         </div>
//       </form>
//     );
//   }
// }

function RegisterForm() {
  const [user, setUser] = useState({
    username: 'Romain',
    gender: 'm',
    subscription: true,
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const name = event.target.name;
    const value =
      event.target.type === 'checkbox'
        ? (event.target as HTMLInputElement).checked
        : (event.target as HTMLInputElement).value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(user);
  };

  return (
    <form className="RegisterForm" onSubmit={handleSubmit}>
      <div>
        Username: <input type="text" name="username" value={user.username} onChange={handleChange} />
      </div>
      <div>
        Gender :{' '}
        <select value={user.gender} name="gender" onChange={handleChange}>
          <option value="f">Female</option>
          <option value="m">Male</option>
        </select>
      </div>
      <div>
        Subscribe to the newsletter :
        <input type="checkbox" name="subscription" checked={user.subscription} onChange={handleChange} />
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>
  );
}

export default RegisterForm;

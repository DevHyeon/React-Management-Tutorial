import './App.css';
import Customer from './components/Customer';

const customer =[
  {
  'id':1,
  'image': 'https://placeimg.com/64/64/1',
  'name' : '염석현',
  'birthday' : '981023',
  'gender' : '남자',
  'job' : '대학생'
},
{
  'id':2,
  'image': 'https://placeimg.com/64/64/2',
  'name' : '홍길동',
  'birthday' : '981023',
  'gender' : '남자',
  'job' : '의적'
},
{
  'id':3,
  'image': 'https://placeimg.com/64/64/3',
  'name' : '김민지',
  'birthday' : '980512',
  'gender' : '여자',
  'job' : '대학생'
}

]

function App() {
  return (
    <div>
      {
        customer.map(c =>{
          return (
            <Customer
            key={c.id}
            id={c.id}
            image={c.image}
            name={c.name}
            birthday={c.birthday}
            gender={c.gender}
            job={c.job}

            />
            
          );
        })
      }
  
    </div>
  );
}

export default App;

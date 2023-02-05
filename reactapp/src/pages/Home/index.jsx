
import React, { useState, useEffect } from 'react';
import './styles.css';
import { Card } from '../../components/Card';

function Home() {
  //O estado tem 2 elementos, o elemento em si(studentName) e a função q muda o estado(set...)//s
  const [studentName, setStudentName] = useState();
  const [students, setStudents] = useState([]);
  const [user, setUser] = useState({name: '', avatar:''});

  function AddStudent(){
    const newStudent = {
      name: studentName, 
      time: new Date().toLocaleTimeString("pt-br")
    };

    setStudents( prevState => [...prevState, newStudent]); // spread operator para colocar todos nomes
    // no mesmo vetor (...)

  }
  useEffect(() => {
    //corpo do useEffect , todas as ações que serão executadas
    fetch('https://api.github.com/users/GuilhermeCorsino21')
    .then(response => response.json())
    .then(data => {
      setUser({
        name: data.login,
        avatar: data.avatar_url,
      })
    })
  }, []);
  return (
    <div className='container'>
      <header>
        <h1>Lista de Presença: </h1>
        <div> 
          <strong>{user.name}</strong>
          <img src='{user.avatar}' alt='imagem de perfil do git' />
        </div>
      </header>
      <input type="text" 
      placeholder="Digite o nome.." 
      // função para atualizar o estado //
      onChange = {e => setStudentName(e.target.value)}
      />
      
      <button type="button" onClick={AddStudent}>
        Adicionar
      </button>
      
      {
        students.map(student => (
        <Card 
          key={student.time}
          name={student.name}
          time={student.time}
          
        />
        ))        
        
      }
      
    
    </div>
    
  )
}

export default Home



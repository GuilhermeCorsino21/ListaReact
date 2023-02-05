
import React, { useState } from 'react';
import './styles.css';
import { Card } from '../../components/Card';

function Home() {
  //O estado tem 2 elementos, o elemento em si(studentName) e a função q muda o estado(set...)//s
  const [studentName, setStudentName] = useState();
  const [students, setStudents] = useState([]);

  function AddStudent(){
    const newStudent = {
      name: studentName, 
      time: new Date().toLocaleTimeString("pt-br", {
        hours:'2-digit', 
        minute: '2-digit',
        seconds: '2-digit'
      })
    };

    setStudents([newStudent]);

  }

  return (
    <div className='container'>
      <h1>Lista de Presença: </h1>
      <input type="text" 
      placeholder="Digite o nome.." 
      // função para atualizar o estado //
      onChange = {e => setStudentName(e.target.value)}
      />
      
      <button type="button" onClick={AddStudent}>
        Adicionar
      </button>
      
      {
        students.map(student => <Card name={student.name} time={student.time} />)
        
        
      }
      
    
    </div>
    
  )
}

export default Home



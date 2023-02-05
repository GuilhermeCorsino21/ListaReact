
import React, { useState } from 'react';
import './styles.css';
import { Card } from '../../components/Card';

function Home() {
  //O estado tem 2 elementos, o elemento em si(studentName) e a função q muda o estado(set...)//s
  const [studentName, setStudentName] = useState();

  return (
    <div className='container'>
      <h1>Nome: {studentName} </h1>
      <input type="text" 
      placeholder="Digite o nome.." 
      // função para atualizar o estado //
      onChange = {e => setStudentName(e.target.value)}
      />
      
      <button type="button">Adicionar</button>
      
      <Card name='Luiz' time='18:32' />
      <Card name='Guilherme' time='18:40' />
      <Card name='Aleatório' time='20:50' />
      
      
    
    </div>
    
  )
}

export default Home



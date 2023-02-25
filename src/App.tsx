import React from 'react'

import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

import styles from './App.module.css'
import './global.css'


const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/edgaregidio.png',
      name: 'Edgar Egidio',
      role: 'Developer React'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraaa!'},
      {type: 'paragraph', content: 'Acabei de subir uma nova aplicação no meu repositorio github do curso Ignite!'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2023-02-21 15:50:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO Rocketseat'
    },
    content: [
      {type: 'paragraph', content: 'Fala devs!'},
      {type: 'paragraph', content: 'Hoje estudei bastando o ignite 2022!'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2023-03-20 10:00:00')
  },
  {
    id: 3,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayke Britdo',
      role: 'Developer JS Rocketseat'
    },
    content: [
      {type: 'paragraph', content: 'Fala meu pequeno gafanhoto'},
      {type: 'paragraph', content: 'Na vou publicar um vídeo de como fazer um bolo de cenoura com cobertura de chocolate em React, segue o link da live abaixo!'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2023-03-22 15:00:00')
  },
]

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((posts) => {
            return (
              <Post
                key={posts.id}
                author={posts.author}
                content={posts.content}
                publishedAt={posts.publishedAt}
              />
            )
          }) }
        </main>
      </div>
    </>
  )
}

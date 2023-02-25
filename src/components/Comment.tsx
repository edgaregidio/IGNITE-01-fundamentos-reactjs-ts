import React, { useState } from 'react'
import { Avatar } from './Avatar'
import {Trash, ThumbsUp} from 'phosphor-react'

import styles from './Comment.module.css'

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({content, onDeleteComment}: CommentProps) {
  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1
    })
  }


  return (
    <div className={styles.comment}>
        <Avatar hasBorder={false} src='https://github.com/edgaregidio.png' alt='' title='Avatar'/>
        
        <div className={styles.commentBox}>
          <div className={styles.commentContent}>
            <header>
              <div className={styles.authorAndTime}>
                <strong>Edgar Egidio</strong>
                <time
                  title='11 de Fevereiro às 13:21'
                  dateTime='2022-05-11 08:13:30'
                >
                  Publicado hà 1h
                </time>
              </div>

              <button onClick={handleDeleteComment} title='Deletar comentário' >
                <Trash size={24} />
              </button>

            </header>

            <p>{content}</p>
          </div>

          <footer>
            <button onClick={handleLikeComment}>
              <ThumbsUp size={20} /> Aplaudir <span><strong>{likeCount}</strong></span>
            </button>
          </footer>
        </div>
    </div>
  )
}

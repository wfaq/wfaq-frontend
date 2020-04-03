import React from 'react';
import { FiThumbsUp,FiThumbsDown}  from 'react-icons/fi';

import './styles.css';

export default function Questions() {
    return (
        <div className="container">
            <ul>
                <li>
                    <strong>Titulo da Questão</strong>
                    <p>Lore ipsum </p>
                </li>
                <li>
                    <strong>Titulo da Questão</strong>
                    <p>Lore ipsum </p>
                    <div className="buttons">
                          <FiThumbsUp size={16} />                        
                          <FiThumbsDown size={16} />
                    </div>
                </li>
                <li>
                    <strong>Titulo da Questão</strong>
                    <p>Lore ipsum </p>
                </li>
                <li>
                    <strong>Titulo da Questão</strong>
                    <p>Lore ipsum </p>
                </li>
            </ul>

        </div>
    )
}
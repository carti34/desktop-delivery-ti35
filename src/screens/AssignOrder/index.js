import React from 'react';
import Board from '@lourenci/react-kanban';
import GlobalMenu from '../../components/GlobalMenu';

const AssignOrder = () => {
    const board = {
        columns: [
            {
                id: 1,
                title: '# Pedidos #',
                cards: [
                    {
                        id: 1,
                        title: 'pedido #1',
                        description: 'Vila Prado [ 19:00 ]',
                    },
                    {
                        id: 2,
                        title: 'pedido #2',
                        description: 'Vila Prado [ 19:00 ]',
                    },
                    {
                        id: 3,
                        title: 'pedido #3',
                        description: 'Vila Prado [ 19:00 ]',
                    },
                    {
                        id: 4,
                        title: 'pedido #4',
                        description: 'Vila Prado [ 19:00 ]',
                    },
                    {
                        id: 5,
                        title: 'pedido #5',
                        description: 'Vila Prado [ 19:00 ]',
                    },
                ],
            },
            {
                id: 2,
                title: 'João',
                cards: [],
            },
            {
                id: 3,
                title: 'Mario',
                cards: [],
            },
            {
                id: 4,
                title: 'Mariano',
                cards: [],
            },
        ]
    };

    return (
        <>
            <GlobalMenu />
            <h1>Distribuição de Pedidos</h1>
            <Board
                initialBoard={board}
            />
        </>
    );
}

export default AssignOrder;
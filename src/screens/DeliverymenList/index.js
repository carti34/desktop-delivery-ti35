import React, { useCallback, useEffect, useState } from 'react';
import { remote } from 'electron';
import path from 'path';
import fs from 'fs';
import PersonCard from '../../components/PersonCard';
import GlobalMenu from '../../components/GlobalMenu';
import api from '../../services/api';

const DeliverymenList = () => {
    const [list, setList] = useState([]);

    const showNotification = useCallback((title, msg) => {
        const options = {
            title: title,
            body: msg,
            silent: false,
        };
        new remote.Notification(options).show();
    }, []);

    const savePdf = async () => {
        const filePath = path.join(__dirname, `../../assets/Lista-de-entregadores_${new Date().toISOString()}.pdf`);
        const options = {
            marginsType: 0,
            pageSize: 'A4',
            printBackground: true,
            landscape: false,
        }
        const win = remote.BrowserWindow.getFocusedWindow();
        try {
            const pdf = await win.webContents.printToPDF(options);
            fs.writeFile(filePath, pdf, (err) => {
                if (err) {
                    console.log(err);
                } else {
                    showNotification('Exportar PDF', 'Arquivo exportado com sucesso');
                    // console.log('Arquivo exportado com sucesso');
                }
            });
        } catch (error) {
            console.log(error);
        }
    }

    const loadingDeliverymen = useCallback(async () => {
        try {
            const response = await api.get('/users');
            if (response.data) setList(response.data);
        } catch (error) {
            console.log('Ocorreu uma falha na comunicação com a API.');
        }
    }, []);

    useEffect(() => {
        loadingDeliverymen();
    }, [loadingDeliverymen]);

    return (
        <>
            <GlobalMenu />
            <h2>Lista de Entregadores</h2>
            <button id="btnPdf" type="button" onClick={() => savePdf()}>Exportar lista</button>
            <ul>
                {list.map(d => {
                    return (
                        <PersonCard key={d.id} data={d} />
                    );
                })}
            </ul>
        </>
    );
}

export default DeliverymenList;
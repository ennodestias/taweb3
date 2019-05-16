import React, {Component} from 'react';
import Article from './comp/Article';
import {Row, Col, Carousel} from 'antd';
import web1 from '../web1.png';
import pap from '../pap.png';
import de from '../de.png';
import pap2 from '../pap2.png';
import Animate from 'react-smooth';

class Portofolio extends Component {
    render(){
        return (
            <div>
                <div>
                    <Row guter={8}>
                        <Col offset={4} span={16}>
                        <h1>My Latest Work</h1>
                            <Row>
                                <Animate to="0" from="1" attributeName="opacity">
                                <Col span={8}>
                                    <Article width="80%" title="Wedding Cake Web" desc="Tugas Akhir untuk mata kuliah Praktikum Web 1" gambar={web1}/>
                                </Col>
                                </Animate>
                                <Animate to="0" from="1" attributeName="opacity">
                                <Col span={8}>
                                    <Article width="80%" title="UI/UX App DeliCake" desc="UI/UX design Aplikasi DeliCake untuk mata kuliah Praktikum Perancangan Antarmuka Pengguna" gambar={pap}/>
                                </Col>
                                </Animate>
                                <Animate to="0" from="1" attributeName="opacity">
                                <Col span={8}>
                                    <Article width="80%" title="UX Restoku" desc="UX Mesin Kasir untuk Restoran" gambar={pap2}/>
                                </Col>
                                </Animate>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </div>
        );
        }
}

export default Portofolio;
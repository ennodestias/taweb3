import React, {Component} from 'react';
import Article from './comp/Article';
import {Row, Col, Carousel} from 'antd';
import web1 from '../web1.png';
import pap from '../pap.png';
import de from '../de.png';
import pap2 from '../pap2.png';


class Portofolio extends Component {
    render(){
        return (
            <div>
                <div>
                    <Row guter={8}>
                        <Col offset={4} span={16}>
                        <h1>My Latest Work</h1>
                            <Row>
                                <Col span={24}>
                                <Carousel autoplay>
                                <Article width="100%" title="Wedding Cake Web" desc="Tugas Akhir untuk mata kuliah Praktikum Web 1" gambar={web1}/>
                                <Article width="100%" title="UI/UX App DeliCake" desc="UI/UX design Aplikasi DeliCake untuk mata kuliah Praktikum Perancangan Antarmuka Pengguna" gambar={pap}/>
                                <Article width="100%" title="Lowpoly" desc="Lowpoly untuk tugas Desain Elementer" gambar={de}/>
                                <Article width="100%" title="UX Restoku" desc="UX Mesin Kasir untuk Restoran" gambar={pap2}/>
                                </Carousel>
                                </Col>
                            </Row>
                            <br/>
                        </Col>
                    </Row>
                </div>  
            </div>
        );
        }
}

export default Portofolio;
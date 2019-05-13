import React, {Component} from 'react';
import MyCarousel from './comp/myCarousel';
import Article from './comp/Article';
import {Row, Col} from 'antd';

class Home extends Component {
    render(){
        return (
            <div>
                <MyCarousel/>
                <br/>
                <div>
                <Row guter={8}>
                        <Col offset={4} span={16}>
                            <Row>
                                <Col span={8}>
                                <Article title="SUMMER FRUIT CAKE" desc="You’ll be enjoying this fruit cake all summer long once you try it!" gambar="https://tatyanaseverydayfood.com/wp-content/uploads/2018/07/Summer-Sangria-Cake-4.jpg"/>
                                </Col>
                                <Col span={8}>
                                <Article title="" desc=" " gambar="https://tatyanaseverydayfood.com/wp-content/uploads/2018/11/Keto-Chocolate-Mousse-Cake-2-1.jpg"/>
                                </Col>
                                <Col span={8}>
                                <Article title="" desc=" " gambar="https://tatyanaseverydayfood.com/wp-content/uploads/2018/02/Strawberry-Tuxedo-Cake-4.jpg"/>
                                </Col>
                            </Row>
                            <br/>
                            <Row>
                            <Col span={8}>
                                <Article title="" desc=" " gambar="https://tatyanaseverydayfood.com/wp-content/uploads/2017/06/Caramel-Raspberry-Mousse-Cake-4.jpg"/>
                                </Col>
                                <Col span={8}>
                                <Article title="" desc=" " gambar="https://tatyanaseverydayfood.com/wp-content/uploads/2017/05/Chocolate-Lavender-Pavlova-4.jpg"/>
                                </Col>
                                <Col span={8}>
                                <Article title="RED VELVET CREPE CAKE" desc="Crepe cakes are all about the layers upon layers of thin crepes!" gambar="https://tatyanaseverydayfood.com/wp-content/uploads/2017/12/Red-Velvet-Crepe-Cake-6.jpg"/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>  
            </div>   
        );
        }
}

export default Home;
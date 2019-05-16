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
                                <Article title="SUMMER FRUIT CAKE" desc="You’ll be enjoying this fruit cake all summer long once you try it! " gambar="https://tatyanaseverydayfood.com/wp-content/uploads/2018/07/Summer-Sangria-Cake-4.jpg"/>
                                </Col>
                                <Col span={8}>
                                <Article title="KETO CHOCOLATE MOUSSE CAKE" desc="This keto chocolate mousse cake with keto whipped cream will satisfy all your chocolate and dessert cravings while you’re on the keto diet!" gambar="https://tatyanaseverydayfood.com/wp-content/uploads/2018/11/Keto-Chocolate-Mousse-Cake-2-1.jpg"/>
                                </Col>
                                <Col span={8}>
                                <Article title="STRAWBERRY TUXEDO CAKE" desc="It’s made with tender chocolate and vanilla cake layers, no-bake chocolate cheesecake layers and loads of strawberries" gambar="https://tatyanaseverydayfood.com/wp-content/uploads/2018/02/Strawberry-Tuxedo-Cake-4.jpg"/>
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
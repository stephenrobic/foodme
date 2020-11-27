// a main page allows user to select between ListPosts and CreateNewPost pages
import React from "react";
import {Layout, Menu} from 'antd';
import "antd/dist/antd.css";
import ListPosts from "./ListPosts";
import CreateNewPost from "./CreateNewPost";

// TODO: change Foodme to Recipes, dependent on chosen context
class Foodme extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected:1
        }
    }
    handleClick = e => {
        this.setState({selected:e})
    }
    render() {
        const { Header, Content } = Layout;

        return (
            <Layout>
                <Header>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[this.state.selected.toString()]}>
                        <Menu.Item key="1" onClick={() => this.handleClick(1)}> Recipes</Menu.Item>
                        <Menu.Item key="2" onClick={() => this.handleClick(2)}> Create Recipe</Menu.Item>
                    </Menu></Header>
                <Content>
                    {this.state.selected===1?<ListPosts />: <CreateNewPost />
                    }
                </Content>
            </Layout>
        );
    }
}


export default Foodme
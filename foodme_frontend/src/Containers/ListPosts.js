import React from "react";
import {connect} from 'react-redux'
import {getPosts,deletePost} from '../Redux/actions.js'
import {Card, Row, Col, message } from 'antd';
import { EditOutlined, EllipsisOutlined, DeleteOutlined } from '@ant-design/icons';
import "antd/dist/antd.css";


class ListPosts extends React.Component {

    componentDidMount() {
        this.props.getPosts();
    }

    deletePost = (id) => {
        this.props.deletePost(id, this.info);
    }

    info() {
        message.info('Post Deleted');
    };

    render() {
        const posts = this.props.posts
        console.log(posts)

        return (
            <Col span={12} offset={6}>
                {posts.map(p => (
                    <Row gutter={[48, 48]}>
                        <Col span={24}>
                            <Card
                                key={p.id}
                                title={p.title}
                                style={{width: '100%'}}
                                actions={[
                                    <DeleteOutlined key="delete" onClick={()=>this.deletePost(p.id)} />,
                                ]}
                            >
                                <p>{p.ingredients}</p>
                                <p>{p.directions}</p>
                                <p>{p.created_by}</p>
                            </Card>
                        </Col>
                    </Row>
                ))}
            </Col>
        );
    }
}

const mapStateToProps = (state) => ({
    posts: state.posts
})

// TODO: will most likely have to be changed to Recipe(s) in stead of Post(s)
const mapDispatchToProps = {
    getPosts, deletePost
}

export default connect(mapStateToProps, mapDispatchToProps)(ListPosts)

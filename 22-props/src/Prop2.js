import image from './sample2.png';

export default function Prop2(props) {
    const { title, author, price, type } = props;
    const my_style = {
        color: 'orange',
    };
    return (
        <div>
            <p>
                <div
                    style={{
                        backgroundColor: 'gray',
                        width: '400px',
                        height: '450px',
                    }}
                >
                    <h1 style={my_style}>이번주 베스트 셀러</h1>
                    <img style={{ width: '200px' }} src={image}></img>
                    <h3>{title}</h3>
                    <h4>저자 : {author}</h4>
                    <h4>판매가: {price}</h4>
                    <h4>저자 : {type}</h4>
                </div>
            </p>
        </div>
    );
}

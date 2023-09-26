import PropTypes from 'prop-types';

export default function Prop1(props) {
    const { food } = props;
    return (
        <div>
            <p>
                <span style={{ color: 'red' }}>{props.food}</span>에는 건강에
                좋은게 많습니다
            </p>
        </div>
    );
}

Prop1.defaultProps = {
    food: '밥',
};

Prop1.propTypes = {
    name: PropTypes.string,
};

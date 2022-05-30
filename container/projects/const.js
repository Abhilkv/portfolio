import AlgoTrade from '../../public/projects/algo-trade.webp';
import Helmet from '../../public/projects/helmet.gif';
import Trade from '../../public/projects/trade.jpeg';
import Wynss from '../../public/projects/wynss.png';

const experienceData = [
    {
        src: Trade,
        title: 'Stock Screener',
        type: 'Internal',
        status: 'Completed',
        tech: ['React-Native'],
        description: 'Mobile application developed to filter out different stocks based on some conditions in realtime by uses SmartAPI from Angelbrocking. Used for managing personal investment activities.'
    },
    {
        src: Helmet,
        title: 'Hell-met',
        type: 'Academic',
        status: 'Completed',
        tech: ['Open-CV, Python, Machine Learning, Raspberry pi'],
        description: 'To detect the riders who are driving 2 wheelers without wearing helmet. Using the Random forest classification model the system can detect whether the rider is wearing helmet or not. If not , then the number plate will be recorded'
    },
    {
        src: AlgoTrade,
        title: 'Trade Bot',
        type: 'Internal',
        tech: ['Java'],
        status: 'Testing',
        description: 'Auto trading bot for stock market, which makes the trade based on the volume burst on a particular stock by using SmartAPI from Angel brocking'
    },
    {
        src: Wynss,
        title: 'Wynss',
        type: 'Freelance',
        tech: ['React'],
        status: 'Progressing',
        description: 'An online platform for connecting vendors and customers directly for trading goods or services, where i could to work on the UI part'
    }
];

export default experienceData;


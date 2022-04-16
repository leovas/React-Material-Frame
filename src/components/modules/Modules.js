import Dashboard from './Dashboard';
import Sites from './Sites';
import Maps from './Maps';
import Exporter from './Exporter';


const Modules = [
    {
        value: 0,
        path:"/",
        component: Dashboard
    },
    {
        value: 1,
        path:"/sites",
        component: Sites
    },
    {
        value: 2,
        path:"/maps",
        component: Maps
    },
    {
        value: 3,
        path:"/exporter",
        component: Exporter
    }
];

export default Modules;
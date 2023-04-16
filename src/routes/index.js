import Home from "~/pages/Home/Home";
import Flowing from "~/pages/Flowing";
import Profile from '~/pages/Profile/Profile';
import Upload from '~/pages/Upload/Upload';
import { HeaderOnly } from "~/components/Layout";

const publicRoute = [
    {path : '/', component: Home },
    {path : '/flowing', component: Flowing },
    {path : '/profile', component: Profile},
    {path : '/upload', component: Upload, layout:HeaderOnly},
    {path: '/only', component: HeaderOnly}
];

const privateRoute = [

];

export {publicRoute, privateRoute};
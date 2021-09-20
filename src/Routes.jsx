import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

import { MainLayout } from './pages/MainLayout'
import { NoMatch } from './pages/NoMatch'
import Home from './pages/Home'
import TextCleaner from './pages/TextCleaner'
import DigitConverter from './pages/DigitConverter'
import Calendar from './pages/Calendar'

const items = [
    {
        path: '/cleantxt',
        title: 'تمیزکننده متن فارسی',
        component: <TextCleaner />,
        icon: <i className="fas fa-pen-fancy text-info"></i>
    },
    {
        path: '/convertdigits',
        title: 'تبدیل ارقام',
        component: <DigitConverter />,
        icon: <i className="fab fa-draft2digital text-warning"></i>
    },
    {
        path: '/calendar',
        title: 'تقویم شیعه',
        component: <Calendar />,
        icon: <i className="fas fa-calendar-alt text-success"></i>
    },
];

export const Routes = () =>
    <Router>
        <Switch>
            <Route exact path='/'>
                <Home items={items} />
            </Route>
            {items.map(t => (
                <Route key={t.path} path={t.path}>
                    <MainLayout title={t.title}>
                        {t.component}
                    </MainLayout>
                </Route>
            ))}
            <Route path="*">
                <NoMatch />
            </Route>
        </Switch>
    </Router>
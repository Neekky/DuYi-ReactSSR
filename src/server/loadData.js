import { matchRoutes } from 'react-router-config'
import routerConfig from '@/routes/routerConfig'
/**
 * 负责服务端渲染前的加载
 */
export default function (path, store) {
    const matches = matchRoutes(routerConfig, path);
    const proms = [];
    for (const match of matches) {
        match.route.component.loadData && proms.push(Promise.resolve(match.route.component.loadData(store)));
    }
    return Promise.all(proms);
}
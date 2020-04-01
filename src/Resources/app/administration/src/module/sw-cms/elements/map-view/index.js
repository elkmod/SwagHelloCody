import './component';
import './preview';

Shopware.Service('cmsService').registerCmsElement({
    name: 'map-view',
    label: 'sw-cms.elements.mapView.label',
    component: 'sw-cms-el-map-view',
    configComponent: 'sw-cms-el-config-map-view',
    previewComponent: 'sw-cms-el-preview-map-view',
    defaultConfig: {
        googleApiKey: {
            source: 'static',
            value: 'set-your-api-key'
        },
        centerLat: {
            source: 'static',
            value: 52.088186
        },
        centerLon: {
            source: 'static',
            value: 7.245247
        }
    }
});

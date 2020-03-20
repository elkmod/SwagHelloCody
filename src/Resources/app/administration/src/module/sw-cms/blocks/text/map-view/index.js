import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
    name: 'map-view',
    label: 'sw-cms.blocks.text.mapView.label',
    category: 'text',
    component: 'sw-cms-block-map-view',
    previewComponent: 'sw-cms-preview-map-view',
    defaultConfig: {
        marginBottom: '20px',
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px',
        sizingMode: 'boxed'
    },
    slots: {
        map: 'text',
    }
});

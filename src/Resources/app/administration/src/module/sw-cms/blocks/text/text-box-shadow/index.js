import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
    name: 'text-box-shadow',
    label: 'sw-cms.blocks.text.textBoxShadow.label',
    category: 'text',
    component: 'sw-cms-block-text-box-shadow',
    previewComponent: 'sw-cms-preview-text-box-shadow',
    defaultConfig: {
        marginBottom: '20px',
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px',
        sizingMode: 'boxed'
    },
    slots: {
        contentLeft: 'text',
        contentCenter: 'text',
        contentRight: 'text',
    }
});

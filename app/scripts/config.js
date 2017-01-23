let localServer = "localhost:8000";
let remoteServer = "52.45.229.11";
export const usedServer = localServer;
//export const usedServer = remoteServer;

import imgBlankThumbnailOrig from 'file!../images/thumbnails/blank.png';

//import imgVertical1DTilesThumbnail from 'file!../images/thumbnails/vertical-1d-tiles-thumbnail.png';

import imgViewportProjectionCenter from 'file!../images/thumbnails/viewport-projection-center.png';
import imgVerticalStackedInterval from 'file!../images/thumbnails/vertical-stacked-interval.png';
import imgHorizontalStackedInterval from 'file!../images/thumbnails/horizontal-stacked-interval.png';
import img2dTilesThumbnail from 'file!../images/thumbnails/2d-tiles-thumbnail.png';
import imgHorizontal1DTilesThumbnail from 'file!../images/thumbnails/horizontal-1d-tiles-thumbnail.png';
import imgVerticalLineThumbnail from 'file!../images/thumbnails/vertical-line-thumbnail.png';
import imgHorizontalLineThumbnail from 'file!../images/thumbnails/horizontal-line-thumbnail.png';
import imgHeatmapThumbnail from 'file!../images/thumbnails/heatmap-thumbnail.png';
import imgVerticalAxisThumbnail from 'file!../images/thumbnails/vertical-axis-thumbnail.png';
import imgHorizontalAxisThumbnail from 'file!../images/thumbnails/horizontal-axis-thumbnail.png';

export const tracksInfo = [
    {
        type: 'left-axis',
        datatype: ['axis'],
        local: true,
        orientation: '1d-vertical',
        name: 'Left Axis',
        thumbnail:imgVerticalAxisThumbnail
    },
    {
        type: 'top-axis',
        datatype: ['axis'],
        local: true,
        orientation: '1d-horizontal',
        name: 'Top Axis',
        thumbnail: imgHorizontalAxisThumbnail,
        defaultOptions: {}
    },
    {
        type: 'heatmap',
        datatype: ['matrix'],
        local: false,
        orientation: '2d',
        thumbnail:imgHeatmapThumbnail,
        defaultOptions: {
            colorRange: ['#FFFFFF','#F8E71C', '#F5A623', '#D0021B' ],
            maxZoom: null
        }
    },
    {
        type: 'horizontal-line',
        datatype: ['vector'],
        local: false,
        orientation: '1d-horizontal',
        thumbnail: imgHorizontalLineThumbnail,
        defaultOptions: {

        }
    },
    {
        type: 'vertical-line',
        datatype: ['vector'],
        local: false,
        orientation: '1d-vertical',
        thumbnail: imgVerticalLineThumbnail
    },
    {
        type: 'horizontal-1d-tiles',
        datatype: ['vector', 'stacked-interval', 'gene-annotation'],
        local: false,
        orientation: '1d-horizontal',
        name: 'Horizontal 1D Tile Outlines',
        thumbnail: imgHorizontal1DTilesThumbnail

    },
    {
        type: 'vertical-1d-tiles',
        datatype: ['1d-tiles'],
        local: false,
        orientation: '1d-vertical',
        name: 'Vertical 1D Tile Outlines'
    },
    {
        type: '2d-tiles',
        datatype: ['matrix'],
        local: false,
        orientation: '2d',
        name: '2D Tile Outlines',
        thumbnail: img2dTilesThumbnail
    },
    {
        type: 'top-stacked-interval',
        datatype: ['stacked-interval'],
        local: false,
        orientation: '1d-horizontal',
        thumbnail: imgHorizontalStackedInterval
    },
    {
        type: 'left-stacked-interval',
        datatype: ['stacked-interval'],
        local: false,
        orientation: '1d-vertical',
        thumbnail: imgVerticalStackedInterval
    },
    {
        type: 'viewport-projection-center',
        datatype: ['2d-projection'],
        local: true,
        hidden: true,
        orientation: '2d',
        name: 'Viewport Projection',
        thumbnail: imgViewportProjectionCenter
    },

    {
        type: 'horizontal-gene-annotations',
        datatype: ['gene-annotation'],
        local: false,
        orientation: '1d-horizontal',
        name: 'Gene Annotations',
        thumbnail: null
    },
    {
        type: 'vertical-gene-annotations',
        datatype: ['gene-annotation'],
        local: false,
        orientation: '1d-vertical',
        name: 'Gene Annotations',
        thumbnail: null
    },
    {
        type: 'arrowhead-domains',
        datatype: ['arrowhead-domains'],
        local: false,
        orientation: '2d',
        name: 'Arrowhead Domains',
        thumbnail: null
    },

    {
        type: 'combined',
        datatype: 'any',
        local: true,
        orientation: 'any'
    }
]

export const TILE_FETCH_DEBOUNCE = 100;
// Number of milliseconds zoom-related actions (e.g., tile loading) are debounced
export const ZOOM_DEBOUNCE = 100;
export const imgBlankThumbnail = imgBlankThumbnailOrig;

let temp = {};

tracksInfo.forEach(t => {
    temp[t.type] = t;
})

export const tracksInfoByType = temp;

// the length of time to keep refreshing the view after
// a drag event
export const SHORT_DRAG_TIMEOUT = 110;
export const LONG_DRAG_TIMEOUT = 1000;

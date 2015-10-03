function makeSections(config) {
    var rootElement = document.createElement('div');
    var sections = config['sections'];
    for (var i = 0; i < sections.length; i++) {
        var sectionElement = makeSection(sections[i]);
        rootElement.appendChild(sectionElement);
    }
    return rootElement;    
}

function makeSection(section) {
    var rootElement = document.createElement('div');

    var title = section['title'];
    if (title) {
        var titleElement = document.createElement('h1');
        titleElement.innerHTML = title;
        rootElement.appendChild(titleElement);
    }

    var contents = section['contents'];
    for (var i = 0; i < contents.length; i++) {
        var contentElement = makeContent(contents[i]);
        rootElement.appendChild(contentElement);
    }

    return rootElement;
}

function makeContent(content) {
    var rootElement = document.createElement('div');

    var title = content['title'];
    if (title) {
        var titleElement = document.createElement('h2');
        titleElement.innerHTML = title;
        rootElement.appendChild(titleElement);
    }

    var charts = content['charts'];
    for (var i = 0; i < charts.length; i++) {
        var chartElement = document.createElement('div');
        chartElement.id = charts[i];
        chartElement.className = 'chart';
        rootElement.appendChild(chartElement);
    }

    return rootElement;
}
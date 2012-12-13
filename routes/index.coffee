module.exports = (app) ->

  app.get '/', (req, res) ->
    res.render 'index', {title: 'CODE3 Coopérative de solidarité'}

  app.get '/services', (req, res) ->
    res.render 'services', {title: 'Services | CODE3'}

  app.get '/services/sherpas', (req, res) ->
    res.render 'sherpas', {title: 'Sherpas technologiques | CODE3'}

  app.get '/services/conseil', (req, res) ->
    res.render 'conseil', {title: 'Conseillers TI | CODE3'}

  app.get '/services/developpement', (req, res) ->
    res.render 'developpement', {title: 'Développement collaboratif | CODE3'}

  app.get '/clients', (req, res) ->
    res.render 'clients', {title: 'Nos clients | CODE3'}

  app.get '/philosophie', (req, res) ->
    res.render 'philosophie', {title: 'Notre philosophie | CODE3'}

  app.get '/membres', (req, res) ->
    res.render 'membres', {title: 'Nos membres | CODE3'}

  app.get '/contact', (req, res) ->
    res.render 'contact', {title: 'Nous joindre | CODE3'}

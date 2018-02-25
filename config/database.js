if(process.env.NODE_ENV === 'production') {
    module.exports = {mongoURI: 'mongodb:// mayank:mayank2996@ds247678.mlab.com:47678/vidjot-prod'};
} else {
    module.exports = {mongoURI: 'mongodb://localhost/vidjot-dev'}
}
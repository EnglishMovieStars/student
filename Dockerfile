FROM httpd:2.4
COPY ./public-html/ /usr/local/apache2/htdocs/
COPY ./package.json /usr/local/apache2/
COPY ./package-lock.json /usr/local/apache2/

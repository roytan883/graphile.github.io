webpackJsonp([48764759135427],{433:function(e,a){e.exports={data:{remark:{html:'<!-- **************************************** -->\n<header class=\'hero simple\'>\n<div class=\'container\'>\n<div class=\'row\'>\n<div class=\'col-xs-12\'>\n<div class=\'hero-block\'>\n<h1 id="postgraphile"><a href="#postgraphile" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>PostGraphile</h1>\n<h3>\n  Instant GraphQL API for PostgreSQL database\n</h3>\n<br />\n<div class=\'flex\'>\n<a class=\'button--solid-light\' href=\'/postgraphile/introduction/\'>Documentation <span class=\'fa fa-fw fa-long-arrow-right\' /></a>\n</div>\n</div>\n</div>\n</div>\n</div>\n</header>\n<!-- **************************************** -->\n<section>\n<div class=\'container\'>\n<div class=\'row flex-wrap-reverse\'>\n<div class=\'text-center col-xs-12 col-md-9 col-lg-7\'>\n<div class=\'hero-block\'>\n<h2 id="try-it-now"><a href="#try-it-now" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Try it now!</h2>\n<p>The fastest way to get a full client-facing GraphQL API up and running from\na PostgreSQL database schema.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">npx postgraphile <span class="token operator">-</span>c postgres<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>user<span class="token punctuation">:</span>pass@host<span class="token operator">/</span>dbname \\\n  <span class="token operator">--</span>schema schema_name</code></pre>\n      </div>\n<p>See the <a href="/postgraphile/quick-start-guide/">Quick Start Guide</a> to get PostGraphile up and running.</p>\n<p><em><strong>Note</strong>:  Run with latest Node LTS v8+. No installation required\n(npx comes with node performs a temporary install).  Connection string is of the format:\n`postgres://pg</em>user:pg<em>pass@pg</em>host:pg<em>port/pg</em>db`</p>\n<form action="//graphile.us16.list-manage.com/subscribe/post?u=d103f710cf00a9273b55e8e9b&amp;id=c3a9eb5c4e" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate="novalidate">\n<div id="mc_embed_signup_scroll" class="center hero-block">\n<p>Keep up to date on Graphile and PostGraphile features/changes.\nSubscribe to our occasional announcements newsletter:</p>\n<div class="mc-field-group form-inline justify-content-center">\n<div class="form-group">\n<div class="mb2">\n<label class="label--small" for="mce-EMAIL">Email address:</label>\n</div>\n<input autocapitalize="off" autocomplete="off" autocorrect="off" class="input-text mb0-ns mb1" id="mce-EMAIL" name="EMAIL" spellcheck="false" type="email" value="">\n<!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->\n<div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_d103f710cf00a9273b55e8e9b_c3a9eb5c4e" tabindex="-1" value=""></div>\n<input class="button--solid" id="mc-embedded-subscribe" name="subscribe" type="submit" value="Subscribe">\n</div>\n<div id="mce-responses" class="clear">\n<div class="response" id="mce-error-response" style="display:none"></div>\n<div class="response" id="mce-success-response" style="display:none"></div>\n</div>\n</div>\n</div>\n</form>\n</div>\n</div>\n<div class=\'text-center col-xs-12 col-md-3 col-lg-5 postgraphile-logo-bg\'>\n</div>\n</div>\n</div>\n</section>\n<!-- **************************************** -->\n<section>\n<div class=\'container\'>\n<div class=\'row\'>\n<div class=\'col-xs-12\'>\n<div class=\'hero-block\'>\n<h2 id="client-facing-graphql-server"><a href="#client-facing-graphql-server" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Client-facing GraphQL server</h2>\n<p>PostGraphile is designed to serve GraphQL queries directly from clients such as\nwebpages or mobile apps, leveraging the security features built in to\nPostgreSQL. Used this way, backend developers can focus solely on specifying\nthe data schema, business logic and permissions using trusted and familiar\nPostgreSQL - PostGraphile handles making that available as a high-performance,\nlow-latency GraphQL API.</p>\n</div>\n</div>\n</div>\n</div>\n</section>\n<!-- **************************************** -->\n<section>\n<div class=\'container\'>\n<div class=\'row\'>\n<div class=\'col-xs-12\'>\n<div class=\'hero-block\'>\n<h2 id="simple-infrastructure"><a href="#simple-infrastructure" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Simple infrastructure</h2>\n<p>A typical PostGraphile server architecture consists of your PostgreSQL database\nserver and a single Node.js process. There\'s no containers or other complex setup\nrequired in the default stack.</p>\n<p>When it comes time to scale, it\'s easy to scale horizontally using additional\nservers - PostGraphile is stateless by default.</p>\n</div>\n</div>\n</div>\n</div>\n</section>\n<!-- **************************************** -->\n<section>\n<div class=\'container\'>\n<div class=\'row\'>\n<div class=\'col-xs-12\'>\n<div class=\'hero-block\'>\n<h2 id="solves-n1-queries-issues"><a href="#solves-n1-queries-issues" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Solves N+1 queries issues</h2>\n<p>Using graphile-build\'s <a href="/graphile-build/look-ahead/">look-ahead</a> features a\nsingle root level GraphQL query, no matter how nested, can become just one SQL\nquery - leading to fewer database round-trips and thus blazingly fast\nperformance - typically much greater than that you\'d get using <code class="language-text">DataLoader</code>.</p>\n<p><a href="/postgraphile/performance/">Read more about PostGraphile\'s stunning performance</a></p>\n</div>\n</div>\n</div>\n</div>\n</section>\n<!-- **************************************** -->\n<section>\n<div class=\'container\'>\n<div class=\'row\'>\n<div class=\'col-xs-12\'>\n<div class=\'hero-block\'>\n<h2 id="customisable-with-sql"><a href="#customisable-with-sql" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Customisable with SQL</h2>\n<p>PostGraphile has first-class support for your SQL functions, automatically\nexporting them as <a href="/postgraphile/custom-queries/">custom queries</a>, <a href="/postgraphile/custom-mutations/">custom\nmutations</a> and <a href="/postgraphile/computed-columns/">computed\ncolumns</a> as appropriate.</p>\n<p>You can further customise the generated schema with our <a href="/postgraphile/smart-comments/">smart\ncomments</a> feature (which allows renaming and\nremoving columns, tables, relations and functions with a straight-forward\nsyntax using PostgreSQL\'s built in <code class="language-text">COMMENT</code> facility).</p>\n</div>\n</div>\n</div>\n</div>\n</section>\n<!-- **************************************** -->\n<section>\n<div class=\'container\'>\n<div class=\'row\'>\n<div class=\'col-xs-12\'>\n<div class=\'hero-block\'>\n<h2 id="customisable-with-js-plugins"><a href="#customisable-with-js-plugins" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Customisable with JS plugins</h2>\n<p>The GraphQL schema PostGraphile uses is entirely built from <a href="https://github.com/graphile/graphile-build/tree/master/packages/graphile-build-pg/src/plugins">Graphile Build\nplugins</a>,\nyou can disable any of the built in plugins to restrict the functionality or\nadd additional plugins to extended or enhanced your generated schema.</p>\n<p>This allows you to add (or remove) fields, create new types, add functionality,\nreplace functionality or or even tweak existing functionality (e.g. wrapping an\nexisting resolver with your own higher-order function) to gain powerful control\nover your API.</p>\n</div>\n</div>\n</div>\n<div class=\'row\'>\n<div class=\'col-lg-6 col-md-9 col-xs-12\'>\n<h5 id="build-your-schema-with-plugins"><a href="#build-your-schema-with-plugins" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Build your schema with plugins</h5>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token function">buildSchema</span><span class="token punctuation">(</span>plugins<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-graphql"><code class="language-graphql">type Person <span class="token punctuation">{</span>\n<span class="gatsby-highlight-code-line">  <span class="token comment"># @deprecated Use \'name\' instead</span>\n</span>  <span class="token comment"># The person\'s first name</span>\n  <span class="token attr-name">firstName</span><span class="token punctuation">:</span> String\n\n  <span class="token comment">#...</span></code></pre>\n      </div>\n</div><!-- /col-6 -->\n<div class=\'col-lg-6 col-md-9 col-xs-12\'>\n<h5 id="transform-your-schema-with-ease"><a href="#transform-your-schema-with-ease" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Transform your schema with ease</h5>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token function">buildSchema</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>plugins<span class="token punctuation">,</span> DeprecateFromCommentPlugin<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-graphql"><code class="language-graphql">type Person <span class="token punctuation">{</span>\n  <span class="token comment"># The person\'s first name</span>\n<span class="gatsby-highlight-code-line">  <span class="token attr-name">firstName</span><span class="token punctuation">:</span> String <span class="token directive function">@deprecated</span><span class="token punctuation">(</span>\n</span><span class="gatsby-highlight-code-line">    <span class="token attr-name">reason</span><span class="token punctuation">:</span> <span class="token string">"Use \'name\' instead"</span><span class="token punctuation">)</span>\n</span>\n  <span class="token comment">#...</span></code></pre>\n      </div>\n</div>\n</div>\n</div>\n</section>\n<!-- **************************************** -->\n<section>\n<div class=\'container\'>\n<div class=\'row\'>\n<div class=\'col-xs-12\'>\n<div class=\'hero-block\'>\n<h2 id="fully-graphql-compatible"><a href="#fully-graphql-compatible" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Fully GraphQL compatible</h2>\n<p>PostGraphile and Graphile-Build use the <a href="http://graphql.org/graphql-js/">reference GraphQL\nimplementation</a> under the hood, so you know\nthey\'re spec compliant.</p>\n<p>PostGraphile supports GraphQL best practices, including: <a href="https://facebook.github.io/relay/graphql/connections.htm">cursor-based\nconnection\npagination</a>, <a href="https://facebook.github.io/relay/graphql/objectidentification.htm">global\nobject\nidentification</a>,\nand the <a href="https://facebook.github.io/relay/graphql/mutations.htm">Relay Input Object Mutations\nSpecification</a>.</p>\n</div>\n</div>\n</div>\n</div>\n</section>\n<!-- **************************************** -->\n<section>\n<div class=\'container\'>\n<div class=\'row\'>\n<div class=\'col-xs-12\'>\n<div class=\'hero-block\'>\n<h2 id="postgresql-schema-watching"><a href="#postgresql-schema-watching" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>PostgreSQL schema watching</h2>\n<p>PostGraphile has an excellent developer experience (DX) when you use the\n<code class="language-text">--watch</code> CLI flag - it will automatically re-generate the GraphQL schema when\nyour database changes. What\'s more, it will automatically reload GraphiQL\'s\ndocumentation too, so you can see your new schema features right away! No need\nto restart the server!</p>\n</div>\n</div>\n</div>\n</div>\n</section>\n<!-- **************************************** -->\n<section>\n<div class=\'container\'>\n<div class=\'row\'>\n<div class=\'col-xs-12\'>\n<div class=\'hero-block\'>\n<h2 id="graphiql-with-auto-generated-documentation"><a href="#graphiql-with-auto-generated-documentation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>GraphiQL with auto-generated documentation</h2>\n<p>PostGraphile comes with GraphiQL built in, set to automatically update the\ndocumentation when your database schema changes.</p>\n<div class="full-width">\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/graphiql-superheroes-a97c31a13d8bd1fbfe958061779a6fb3-0d0f2.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 650px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 36.88981868898187%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsSAAALEgHS3X78AAABPklEQVQoz12QiY7DIAxE8///10rVbtUrpE0C4YaEkM4aqnalWhpZMvh57OZ4PGK326NtW9xuLbquA2sZWFfUQQgBzvlHUmkMwkJrAyBT1pBSoYT3Hs0wDBCThLUeSluEEOiDBB9GaKWoTs3GVIAiGecxcspyRPQcMYbas65rzY13DtYvuNwVfEx10rwskP2E86UHGxQUDQvzjBCLFjwGCUbvyjjMVH9Dq0ND0+f6+QUrEWOEI7Feon1MMFzDkjzV5iVhvNBGSuA7tm17ATPZLfF8Pj9AH2JdkSsLJwzsqOGUQ8oJ/V5jOu2R5we2vCCnWHtzzmiK1e8ojgtQKgNRgJOpUEerrwS8ngMOB4b2/gvBr1gsI+D277A4eqsct9yiACcC9oKclZV7VR1GGqaGOwQ7UT5Ajz+Y/VTdpZTwB/6kGXc5egMEAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="GraphiQL displaying allSuperheroes"\n        title=""\n        src="/static/graphiql-superheroes-a97c31a13d8bd1fbfe958061779a6fb3-10273.png"\n        srcset="/static/graphiql-superheroes-a97c31a13d8bd1fbfe958061779a6fb3-9b14a.png 163w,\n/static/graphiql-superheroes-a97c31a13d8bd1fbfe958061779a6fb3-94962.png 325w,\n/static/graphiql-superheroes-a97c31a13d8bd1fbfe958061779a6fb3-10273.png 650w,\n/static/graphiql-superheroes-a97c31a13d8bd1fbfe958061779a6fb3-2fc6f.png 975w,\n/static/graphiql-superheroes-a97c31a13d8bd1fbfe958061779a6fb3-a8a2c.png 1300w,\n/static/graphiql-superheroes-a97c31a13d8bd1fbfe958061779a6fb3-0d0f2.png 1434w"\n        sizes="(max-width: 650px) 100vw, 650px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n</div>\n</div>\n</div>\n</div>\n</div>\n</section>\n<!-- **************************************** -->\n<section>\n<div class=\'container\'>\n<div class=\'row\'>\n<div class=\'col-xs-12\'>\n<div class=\'hero-block\'>\n<h2 id="secure"><a href="#secure" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Secure</h2>\n<p>Using PostgreSQL\'s Role-Based Access Control (RBAC) and Row-Level Security\npolicies (RLS), PostGraphile leverages the tried-and-tested authentication\nbaked right in to the worlds most advanced open source database - no more\nreinventing the wheel! Thanks to RLS\'s granularity it\'s possible to express\ncomplex authorisation logic in simple policies; and because the authentication\nis <em>in your database</em> you can ensure nothing (not even companion microservices)\ncan bypass it.</p>\n<p>PostGraphile uses industry standard JWT authentication, allowing for stateless\nauthentication which also works great with CORS. When used as a middleware it\ncan use any HTTP authentication method that Node.js supports, via the\n<a href="http://graphile.meh/postgraphile/usage-library/#exposing-http-request-data-to-postgresql">pgSettings</a>\nfunction. (A favourite is to use Passport.js for social login.)</p>\n</div>\n</div>\n</div>\n</div>\n</section>\n<!-- **************************************** -->\n<section>\n<div class=\'container\'>\n<div class=\'row\'>\n<div class=\'col-xs-12\'>\n<div class=\'hero-block\'>\n<h2 id="flexible"><a href="#flexible" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Flexible</h2>\n<p>If you prefer, PostGraphile can be used as a lightning-fast back-end to an\nalternative client-facing GraphQL schema that might be built using techniques\nsuch as "GraphQL schema stitching" or "GraphQL bindings".</p>\n<p>If you don\'t need the GraphQL schema served over HTTP you can simply use the\nschema directly.</p>\n</div>\n</div>\n</div>\n</div>\n</section>\n<!-- **************************************** -->\n<section>\n<div class=\'container\'>\n<div class=\'row\'>\n<div class=\'text-center col-xs-12\'>\n<div class=\'hero-block\'>\n<h2 id="quick-to-start"><a href="#quick-to-start" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Quick to start</h2>\n</div>\n</div>\n</div>\n<div class=\'row\'>\n<div class=\'text-center col-xs-12 col-md-9 col-lg-7\'>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">npm install <span class="token operator">-</span>g postgraphile\npostgraphile <span class="token operator">-</span>c postgres<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>user<span class="token punctuation">:</span>pass@host<span class="token operator">/</span>dbname \\\n  <span class="token operator">--</span>schema schema_name</code></pre>\n      </div>\n</div>\n</div>\n<br />\n<div class=\'row\'>\n<div class=\'text-center col-xs-12\'>\n<a class=\'strong-link\' href=\'/postgraphile/introduction/\'>Get started <span class=\'fa fa-fw fa-long-arrow-right\' /></a>\n</div>\n</div>\n</div>\n</section>\n<!-- **************************************** -->\n<section class=\'mailinglist\'>\n<div class=\'container\'>\n<div class=\'row\'>\n<div class=\'col-xs-12\'>\n<div class=\'hero-block\'>\n<h3>\nQuestions, comments or feedback?\n<br />\nEmail <a href="mailto:info@graphile.org?subject=Graphile%20question/comment/feedback:)">info@graphile.org</a>\n</h3>\n<form action="//graphile.us16.list-manage.com/subscribe/post?u=d103f710cf00a9273b55e8e9b&amp;id=c3a9eb5c4e" method="post"\nid="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>\n  <div id="mc_embed_signup_scroll" class="center hero-block">\n    <p>Keep up to date on Graphile and PostGraphile features/changes.\n    Subscribe to our occasional announcements newsletter:</p>\n    <div class="mc-field-group form-inline justify-content-center">\n      <div class=\'form-group\'>\n        <div class="mb2">\n          <label class="label--small" for="mce-EMAIL">Email address:</label>\n        </div>\n          <input\n            autocapitalize="off"\n            autocomplete="off"\n            autocorrect="off"\n            class="input-text mb0-ns mb1"\n            id="mce-EMAIL"\n            name="EMAIL"\n            spellcheck="false"\n            type="email"\n            value=""\n          />\n        <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->\n        <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_d103f710cf00a9273b55e8e9b_c3a9eb5c4e" tabindex="-1" value="" /></div>\n        <input\n          class="button--solid"\n          id="mc-embedded-subscribe"\n          name="subscribe"\n          type="submit"\n          value="Subscribe"\n        />\n      </div>\n      <div id="mce-responses" class="clear">\n        <div class="response" id="mce-error-response" style="display:none"></div>\n        <div class="response" id="mce-success-response" style="display:none"></div>\n      </div>\n    </div>\n  </div>\n</form>\n</div>\n</div>\n</div>\n</div>\n</section>\n<!-- **************************************** -->',frontmatter:{path:"/postgraphile/",title:"PostGraphile - full GraphQL API server in an instant from PostgreSQL database"}}},pathContext:{layout:"marketing"}}}});
//# sourceMappingURL=path---postgraphile-9e0ea8b543c94f5d16f9.js.map
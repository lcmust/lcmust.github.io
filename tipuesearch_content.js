<<<<<<< acb6a23b53865701072186337ba1a99261fce44b
var tipuesearch = {"pages":[{"title":"time-recored","text":"时间记录--养成记录时间使用的习惯 1 起床 06:40 2 洗漱 06:45 3 flask_bootstrapVue 07:40 4 俯卧撑35 07:45 5 this-recored5 07:50 6 newpelicanBlog 08:05 7 WWCC 08:15 8 clearBody 08:20 9 breakfast 08:40 10 bikework 08:45 11 towork 08:55 学习使用markdown，表格中无样式，难道是要自己添加CSS样式？ tables are here row1 row2 row3 line11 line12 line13 line21 line22 line23 table1 table2 line11 line12 line21 line22 line31 line32 Name Academy score Harry Potter Gryffindor 90 Hermione Granger Gryffindor 100 Draco Malfoy Slytherin 90 ANDROID手机上使用atimelogger，践行\"没有记录，就没有发生，没有记录便无法管理\"。 \"乱的开始，也比‘等准备好一切再开始'强，开始……开始习惯……慢慢完善\"","tags":"misc","loc":"https://lcmust.github.io/time-recored.html","url":"https://lcmust.github.io/time-recored.html"},{"title":"使用pelican创建静态博客","text":"创建工作目录 首先使用pip安装pelican和markdown pip install pelican markdown 然后创建目录 mkdir my_blog 接着进入目录cd my_blog，执行pelican-quickstart，当前目录内就会生成默认配置好的文件 修改配置 pelicanconf.py是博客的配置文件 使用主题和插件 获取主题：git clone git://github.com/getpelican/pelican-themes.git 获取插件：git clone git://github.com/getpelican/pelican-plugins.git 修改pelicanconf.py文件，使主题和插件生效： THEME = 'pelican-themes/pelican-bootstrap3' #直接指定主题目录 PLUGIN_PATHS = [\"plugins\", \"pelican-plugins\"] #pelican-plugins为插件总目录 PLUGINS = ['tag_cloud', 'related_posts'] #插件总目录里的插件(文件夹)名 上传到GitHub Pages 域名设置 在content/extra/内添加CNAME文件，CNAME里只需写入一行域名，例如：github.com 修改pelianconf.py: STATIC_PATHS = ['extra'] EXTRA_PATH_METADATA = {'extra/CNAME': {'path': 'CNAME'},} git操作 cd output git init git remote add origin https://github.com/your_name/your_blog.git git add -A git commit -am \"update blog\" git pull origin master git push origin master 以后更新网站只需要执行： cd my_blog make html make publish","tags":"live, pelican","loc":"https://lcmust.github.io/shi-yong-pelicanchuang-jian-jing-tai-bo-ke.html","url":"https://lcmust.github.io/shi-yong-pelicanchuang-jian-jing-tai-bo-ke.html"},{"title":"time management and high effect","text":"关于\"时间管理与高效能\"的学习 学习内容选择： <<高效能人士的 7 个习惯>> -- 史蒂芬·柯维（美） <<时间管理 100 讲>> -- 喜马拉雅 FM 易武滨 要点 20/80 原则 专著于重要的事情 4D 做重要的事，推迟不重要的事，委托其他人能做的事，删除不需要做的事 收集记录事情、分类事情、启动蕃茄钟 20 分钟 专著 事情、休息 5 分钟记录 记录时间、分析时间、安排时间 积极主动、要事第一、以终为始 工具使用 纸和笔 手机 APP PC 端跨平台软件： OmniFocus Evernote 淘宝蕃茄钟 ~~删除不必要的工具~~","tags":"misc","loc":"https://lcmust.github.io/time-management-and-high-effect.html","url":"https://lcmust.github.io/time-management-and-high-effect.html"},{"title":"Quickly get a GitHub hosted blog with Pelican, Elegant with little setup steps.","text":"Introduction We're using automation for some of the aspects of Elegant development, but one of the issues for users trying to setup a new site with Pelican is to download plugins, theme, doing configuration, etc. Based on this feedback, a new 'blog-o-matic' approach has been tested: The approach Blog-o-Matic , uses several discussed topics so far: Github and GH Pages for hosting the source and the website Travis-CI.org for automating the update and generation process 'Pelican' for static rendering of your blog from the markdown or AsciiDoc articles 'Elegant' for the 'Theme' peru for automating repository upgrades for plugins, etc The setup process is outlined at its README.md and just requires a few steps to setup that, from that point, will allow you to get your website published each time you commit a new document to the content folder. You can also check the 'generated' website after installation via https://iranzo.github.io/blog-o-matic How does it work under the hood? The repository, contains already the required setups and configurations for setting up a blog using github pages. It requires some manual steps like configuring authentication token in order for automation to 'push' to github the 'rendered webpage', plus enabling 'Travis CI' automation for doing that step. Check the updated README on Blog-o-Matic if you're interested in the setup, but thing is: Setup Repository contains already predefined Travis CI configuration A GH token is needed for Travis CI to push to the 'master' branch that is used by github pages The token needs to be configured as environment variable in 'travis-ci.org' which needs to be enabled for your repository Once this is done, all the automation is ready. Automation workflow The automation, on a new 'commit' (new config, new article, whatever), that can be even done via github.com Web User Interface, will launch a set of tasks: Preparation Setup python environment (Pelican uses python) Install tool 'peru' to sync from other repositories (for later syncing plugins, latest theme, etc) Launch the synchronization of themes, plugins etc (as defined in peru.yaml ) Validation Validate that web page builds ( make html ) Validate that it builds with publish configuration ( make publish ) Deployment Copy extra files to generated website Update the checked out git config to use https so that we can use the token defined in environment variable GHTOKEN Regenerate website and push to github Blog is ready! At this point, Travis CI will have built the blog with the sample content content/welcome.md . Keep adding new files to your new repository in the content/ folder and check the configuration settings in pelicanconf.py to customize your name, twitter, SEO, etc Bear in mind, that at this point you're using a regular Elegant setup with Pelican and some Pelican Plugins, so refer to peru.yaml for the URLs containing the files and extra information that might be helpful for you to learn on the features and customization possibilities. Enjoy your Elegant blog!","tags":"101 — Quick Start","loc":"https://lcmust.github.io/quickly-get-a-github-hosted-blog-with-pelican-elegant-with-little-setup-steps.html","url":"https://lcmust.github.io/quickly-get-a-github-hosted-blog-with-pelican-elegant-with-little-setup-steps.html"},{"title":"Second article","text":"This is some article, in english","tags":"misc","loc":"https://lcmust.github.io/second-article-en.html","url":"https://lcmust.github.io/second-article-en.html"}]};
=======
var tipuesearch = {"pages":[{"url":"/time-recored.html","title":"time-recored","text":"时间记录--养成记录时间使用的习惯 1 起床 06:40 2 洗漱 06:45 3 flask_bootstrapVue 07:40 4 俯卧撑35 07:45 5 this-recored5 07:50 6 newpelicanBlog 08:05 7 WWCC 08:15 8 clearBody 08:20 9 breakfast 08:40 10 bikework 08:45 11 towork 08:55 学习使用markdown，表格中无样式，难道是要自己添加CSS样式？ tables are here row1 row2 row3 line11 line12 line13 line21 line22 line23 table1 table2 line11 line12 line21 line22 line31 line32 Name Academy score Harry Potter Gryffindor 90 Hermione Granger Gryffindor 100 Draco Malfoy Slytherin 90 ANDROID手机上使用atimelogger，践行\"没有记录，就没有发生，没有记录便无法管理\"。 \"乱的开始，也比‘等准备好一切再开始'强，开始……开始习惯……慢慢完善\"","tags":"misc","loc":"/time-recored.html"},{"url":"/shi-yong-pelicanchuang-jian-jing-tai-bo-ke.html","title":"使用pelican创建静态博客","text":"创建工作目录 首先使用pip安装pelican和markdown pip install pelican markdown 然后创建目录 mkdir my_blog 接着进入目录cd my_blog，执行pelican-quickstart，当前目录内就会生成默认配置好的文件 修改配置 pelicanconf.py是博客的配置文件 使用主题和插件 获取主题：git clone git://github.com/getpelican/pelican-themes.git 获取插件：git clone git://github.com/getpelican/pelican-plugins.git 修改pelicanconf.py文件，使主题和插件生效： THEME = 'pelican-themes/pelican-bootstrap3' #直接指定主题目录 PLUGIN_PATHS = [\"plugins\", \"pelican-plugins\"] #pelican-plugins为插件总目录 PLUGINS = ['tag_cloud', 'related_posts'] #插件总目录里的插件(文件夹)名 上传到GitHub Pages 域名设置 在content/extra/内添加CNAME文件，CNAME里只需写入一行域名，例如：github.com 修改pelianconf.py: STATIC_PATHS = ['extra'] EXTRA_PATH_METADATA = {'extra/CNAME': {'path': 'CNAME'},} git操作 cd output git init git remote add origin https://github.com/your_name/your_blog.git git add -A git commit -am \"update blog\" git pull origin master git push origin master 以后更新网站只需要执行： cd my_blog make html make publish","tags":"live, pelican","loc":"/shi-yong-pelicanchuang-jian-jing-tai-bo-ke.html"},{"url":"/time-management-and-high-effect.html","title":"time management and high effect","text":"关于\"时间管理与高效能\"的学习 学习内容选择： <<高效能人士的 7 个习惯>> -- 史蒂芬·柯维（美） <<时间管理 100 讲>> -- 喜马拉雅 FM 易武滨 要点 20/80 原则 专著于重要的事情 4D 做重要的事，推迟不重要的事，委托其他人能做的事，删除不需要做的事 收集记录事情、分类事情、启动蕃茄钟 20 分钟 专著 事情、休息 5 分钟记录 记录时间、分析时间、安排时间 积极主动、要事第一、以终为始 工具使用 纸和笔 手机 APP PC 端跨平台软件： OmniFocus Evernote 淘宝蕃茄钟 ~~删除不必要的工具~~","tags":"misc","loc":"/time-management-and-high-effect.html"},{"url":"/quickly-get-a-github-hosted-blog-with-pelican-elegant-with-little-setup-steps.html","title":"Quickly get a GitHub hosted blog with Pelican, Elegant with little setup steps.","text":"Introduction We're using automation for some of the aspects of Elegant development, but one of the issues for users trying to setup a new site with Pelican is to download plugins, theme, doing configuration, etc. Based on this feedback, a new 'blog-o-matic' approach has been tested: The approach Blog-o-Matic , uses several discussed topics so far: Github and GH Pages for hosting the source and the website Travis-CI.org for automating the update and generation process 'Pelican' for static rendering of your blog from the markdown or AsciiDoc articles 'Elegant' for the 'Theme' peru for automating repository upgrades for plugins, etc The setup process is outlined at its README.md and just requires a few steps to setup that, from that point, will allow you to get your website published each time you commit a new document to the content folder. You can also check the 'generated' website after installation via https://iranzo.github.io/blog-o-matic How does it work under the hood? The repository, contains already the required setups and configurations for setting up a blog using github pages. It requires some manual steps like configuring authentication token in order for automation to 'push' to github the 'rendered webpage', plus enabling 'Travis CI' automation for doing that step. Check the updated README on Blog-o-Matic if you're interested in the setup, but thing is: Setup Repository contains already predefined Travis CI configuration A GH token is needed for Travis CI to push to the 'master' branch that is used by github pages The token needs to be configured as environment variable in 'travis-ci.org' which needs to be enabled for your repository Once this is done, all the automation is ready. Automation workflow The automation, on a new 'commit' (new config, new article, whatever), that can be even done via github.com Web User Interface, will launch a set of tasks: Preparation Setup python environment (Pelican uses python) Install tool 'peru' to sync from other repositories (for later syncing plugins, latest theme, etc) Launch the synchronization of themes, plugins etc (as defined in peru.yaml ) Validation Validate that web page builds ( make html ) Validate that it builds with publish configuration ( make publish ) Deployment Copy extra files to generated website Update the checked out git config to use https so that we can use the token defined in environment variable GHTOKEN Regenerate website and push to github Blog is ready! At this point, Travis CI will have built the blog with the sample content content/welcome.md . Keep adding new files to your new repository in the content/ folder and check the configuration settings in pelicanconf.py to customize your name, twitter, SEO, etc Bear in mind, that at this point you're using a regular Elegant setup with Pelican and some Pelican Plugins, so refer to peru.yaml for the URLs containing the files and extra information that might be helpful for you to learn on the features and customization possibilities. Enjoy your Elegant blog!","tags":"101 — Quick Start","loc":"/quickly-get-a-github-hosted-blog-with-pelican-elegant-with-little-setup-steps.html"},{"url":"/second-article-en.html","title":"Second article","text":"This is some article, in english","tags":"misc","loc":"/second-article-en.html"}]};
>>>>>>> use pelican-elegant

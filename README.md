# allpypi

Layout for all PyPI packages. 

All work of the pypi indexer is done by [@koder-ua](https://github.com/koder-ua/)
who hacked together the [pypi crawler and graph extractor](https://github.com/koder-ua/python_deps/blob/master/deps.py)
20 minutes (HUGE thanks!).

This repository just takes his output (a csv-like file, whose description is
below) and computes layout of the graph.

# how to generate graph?

Prerequisites

1. You will need to download dependencies using [deps.py](https://github.com/koder-ua/python_deps/blob/master/deps.py)
script. Once done, save it into `data/packages.csv`.
2. Install the layouter:

```
git clone https://github.com/anvaka/allpypi
cd allpypi
npm install
```

Now you can perform the layout:

```
node index.js
```

Once layout is computed, you can use it with `anvaka/pm` visualization (see
[README.md](https://github.com/anvaka/pm) for details)

## known bugs
The PyPI doesn't expose dependencies in easy to consume way. They
are declared as part of the setup script (setup.py). 

The parser can only match dependencies with a simple regex. 
Thus if your package uses complex setup.py script, most likely it
will be rendered as a lonley star in the [final visualization](http://anvaka.github.io/pm/#/galaxy/python?cx=-2700&cy=377&cz=5622&lx=-0.0869&ly=-0.2315&lz=-0.0338&lw=0.9684&ml=150&s=1.75&l=1&v=2015-09-27T13-00-00Z).

# license

MIT

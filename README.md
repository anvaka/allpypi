# allpypi

Layout for all pypi packages. Produces graph data for the visualization of the
python dependencies in http://anvaka.github.io/pm/

All work of the pypi indexer is done by [@koder-ua](https://github.com/koder-ua/)
who hacked together the [pypi crawler and graph extractor](https://github.com/koder-ua/python_deps/blob/master/deps.py)
20 minutes.

This repository just takes his output (a csv-like file, whose description is
below) and computes layout of the graph.

# how to generate graph

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

# license

MIT

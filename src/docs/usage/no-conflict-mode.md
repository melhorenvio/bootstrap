### *no conflict* mode & mixins aliases

If you use **me-bootstrap** with other mixin libraries (such as [bootstrap-stylus](https://github.com/Acquisio/bootstrap-stylus)), variables & mixin name colisions may happen.

To avoid that problem, all the functions & mixins of **me-bootstrap** are also available with the `me-` prefix/namespace before their name.

You should include the **me-bootstrap** lib first in your stylesheets, before any other library.

#### *no-conflict* mode

You can also use the *no-conflict* mode : this will disable all the *public* or potentially conflicting variables & mixins name used by **me-bootstrap**, letting only the `me-` prefixed variables & mixins availables.

To use the *no-conflict* mode, simple set the `me-no-conflict` variable to `true` **before** including **me-bootstrap**.

```stylus
me-no-conflict = true
@import 'me-bootstrap'
```

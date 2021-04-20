<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'gadji112_wp');

/** MySQL database username */
define('DB_USER', 'gadji112_wp');

/** MySQL database password */
define('DB_PASSWORD', 'A5KwizybX2Um33z');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'hBtG&TE#zSjOBU@43KAZp8XClCjl&Clm1^q4l0dGu!u1^@4#m!ubePFZP0Hj4I#r');
define('SECURE_AUTH_KEY',  '*TuVQIHPgI1LZf1WXXnG5oPBj4hshS3!LA93rg9SpWpwvpMybZhQ4b*Xt2!IAn80');
define('LOGGED_IN_KEY',    'Ul@7^cDfNlpe9i8PC(7BWAuy7g!A9@M49l#^scK^)ie#OS73v7Bg#^P%^Fyht8X^');
define('NONCE_KEY',        'm1Of)An9ZrwC4RjwbBcX(5D%i#ulHy!AOnvettXoN3A@at*eO!vyRrzJEf!VPI3U');
define('AUTH_SALT',        'u1^bJHmd3ZVJFtg3MiMi*oC57jvxJsKZ5GL9FtcrK3Bn9Nqdu%Uh%Zs7Yd%t96Uq');
define('SECURE_AUTH_SALT', 'uqvkrOMb!!3inL1axHtH#%vMcOe60G(^Ds9Ks78OQXBNNigVkqu^(!U^mV2vL4)Q');
define('LOGGED_IN_SALT',   '7I*(n3WWV#QW#CQRGhWQ9kvyjzyyp2w%Ntch^knF2IPcMcuDvW5vkoR0aAHFcuw7');
define('NONCE_SALT',       'dBVNXpcCn1iUahPxHXkWrgCqajIT*Qtk^)*mKEM2k!hKLfs%tVSs!%cz&i71rq^&');
/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

define( 'WP_ALLOW_MULTISITE', true );

define ('FS_METHOD', 'direct');

<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          '2D5[:3QmkW2Pl?iYK,RM1lDZ3A|3B,R_xxLt!-N:s4CO[.jXh5>/ipO(X[_ syN`' );
define( 'SECURE_AUTH_KEY',   'cfKXVM9]. DaInK(02#&C9uUrNFH4#~+ J5.,$fD<*gDjUMYupUu[Ee>)i$Es#op' );
define( 'LOGGED_IN_KEY',     '#t#2TzAvHY{n:PAV=5V<VH_HCe4:lnGJ<$EO>~U,u3-vExkY{JDOKx ]sxpL?t$G' );
define( 'NONCE_KEY',         '79d^uq_SenfI7fC]2&/DoX:2f|E9MVxS&`<HY?@wX^-P85=JEHc0EMqgFtpE`7C[' );
define( 'AUTH_SALT',         '/)^~/|((cwIos6!D9V-kWbpS&~+kE,6g{eEa?2>O7=sC&y4H`P~ZH5,@p5,R]wGf' );
define( 'SECURE_AUTH_SALT',  '&pxKd->0{5.K_C709KC-!.*yK6v:0/Cat3%4?wXR9Hp)Up=0(J+D./|lSncJ9c)J' );
define( 'LOGGED_IN_SALT',    'f 2LwI]qS4.JLSRpLoZ@w)(+BN[VH3<^PfU1]ZwnSs<l;ODp8c{`,_=RMvbX~TcT' );
define( 'NONCE_SALT',        '`u(+qofp/5=c!OR=>-obT|N>qD6YatXA1IUFfo]Cdn1mIh1?] E+b$(bk~nTGWf~' );
define( 'WP_CACHE_KEY_SALT', '6|zT{vx6yQPn]7G30Jyfs1.TtN#r^)j]|O62M?<|b|<X@55d9`Y826.!n6PcxAAm' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';

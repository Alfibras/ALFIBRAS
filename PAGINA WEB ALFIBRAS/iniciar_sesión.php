<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Iniciar sesión</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <nav>
            <ul class="nav-links">
                <li><a href="index.html">Inicio</a></li>
                <li><a href="register.html">Registro</a></li>
            </ul>
        </nav>
    </header>

    <section id="login">
        <div class="container">
            <h2>Iniciar sesión</h2>
            <form action="login.php" method="post">
                <label for="email">Correo electrónico:</label>
                <input type="email" id="email" name="email" required>
                
                <label for="password">Contraseña:</label>
                <input type="password" id="password" name="password" required>
                
                <button type="submit">Iniciar sesión</button>
            </form>
        </div>
    </section>

    <footer>
        <div class="container">
            <p>&copy; 2024 ALFIBRAS S.A.S. Todos los derechos reservados.</p>
        </div>
    </footer>
</body>
</html>

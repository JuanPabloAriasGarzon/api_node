/*INSERT INTO public."Usuarios"(
	id, nombre, email, password, "createdAt", "updatedAt")
	VALUES(id, nombre, email, password, "createdAt", "updatedAt");
DROP TABLE public."Usuarios";*/
SELECT * FROM public."Usuarios";

INSERT INTO public."Usuarios" (id, nombre, email, password, "createdAt", "updatedAt") VALUES (1, 'Juan Pérez', 'juan.perez@example.com', '1234', to_timestamp(1672531200), to_timestamp(1672531200));
INSERT INTO public."Usuarios" (id, nombre, email, password, "createdAt", "updatedAt") VALUES (2, 'María García', 'maria.garcia@example.com','1234', to_timestamp(1675209600), to_timestamp(1675209600));
INSERT INTO public."Usuarios" (id, nombre, email, password, "createdAt", "updatedAt") VALUES (3, 'Carlos López', 'carlos.lopez@example.com', '1234', to_timestamp(1677628800), to_timestamp(1677628800));
INSERT INTO public."Usuarios" (id, nombre, email, password, "createdAt", "updatedAt") VALUES (4, 'Ana Rodríguez', 'ana.rodriguez@example.com', '1234', to_timestamp(1680307200), to_timestamp(1680307200));
INSERT INTO public."Usuarios" (id, nombre, email, password, "createdAt", "updatedAt") VALUES (5, 'Pedro Sánchez', 'pedro.sanchez@example.com', '1234', to_timestamp(1682899200), to_timestamp(1682899200));
INSERT INTO public."Usuarios" (id, nombre, email, password, "createdAt", "updatedAt") VALUES (6, 'Sofía Fernández', 'sofia.fernandez@example.com', '1234' to_timestamp(1685577600), to_timestamp(1685577600));
INSERT INTO public."Usuarios" (id, nombre, email, password, "createdAt", "updatedAt") VALUES (7, 'Luis Gómez', 'luis.gomez@example.com', '1234' to_timestamp(1688169600), to_timestamp(1688169600));
INSERT INTO public."Usuarios" (id, nombre, email, password, "createdAt", "updatedAt") VALUES (8, 'Laura Díaz', 'laura.diaz@example.com', '1234' to_timestamp(1690848000), to_timestamp(1690848000));
INSERT INTO public."Usuarios" (id, nombre, email, password, "createdAt", "updatedAt") VALUES (9, 'Diego Martínez', 'diego.martinez@example.com', '1234' to_timestamp(1693526400), to_timestamp(1693526400));
INSERT INTO public."Usuarios" (id, nombre, email, password, "createdAt", "updatedAt") VALUES (10, 'Valeria Torres', 'valeria.torres@example.com', '1234' to_timestamp(1696118400), to_timestamp(1696118400));
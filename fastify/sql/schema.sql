CREATE TABLE public.users (
	"id' uuid DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar NULL,
	"email" varchar NULL,
	"status" int4 NULL
);

COMMENT ON COLUMN public.users.id IS 'Identificador único do usuário';
COMMENT ON COLUMN public.users.name IS 'Nome completo do usuário';
COMMENT ON COLUMN public.users.email IS 'E-mail do usuário';
COMMENT ON COLUMN public.users.status IS 'Situação do cadastro do usuário.
1 - Ativo
0 - Inativo';

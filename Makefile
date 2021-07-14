.PHONY: build
build:
	docker-compose build

.PHONY: up
up:
	docker-compose up -d

.PHONY: install
install:
	docker run -v $$PWD:/opt/app/ -w /opt/app/ node-8-jessie npm install

.PHONY: stop
stop:
	docker-compose stop

.PHONY: down
down:
	docker-compose down

.PHONY: attach
attach:
	docker-compose exec app bash

.PHONY: logs
logs:
	docker-compose logs -f

.PHONY: test-acceptance
test-acceptance:
	docker-compose exec app npm run test-acceptance

.PHONY: test-unit
test-unit:
	docker-compose exec app npm run test-unit

.PHONY: full-tests
full-tests:
	docker-compose exec app npm run full-tests

.PHONY: style-check
style-check:
	docker-compose exec app npm run lint

.PHONY: code-doc
code-doc:
	docker-compose exec app npm run code-doc

.PHONY: deploy
deploy:
	./scripts/deploy.sh $(env) $(version)

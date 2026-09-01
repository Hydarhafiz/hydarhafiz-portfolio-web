---
slug: anotheredenai
title: AnotherEdenAI
kind: case-study
hierarchy: primary-personal
status: actively developed
period: December 2025 – Present
context: Personal project
summary: Exploring a source-grounded lineup recommendation system with graph retrieval, typed validation, bounded analysis, and streaming progress.
role: Personal project owner and developer
capabilities:
  - name: FastAPI and Python
    evidence: Web request handling, typed retrieval services, workflow nodes, and the public backend implementation.
  - name: Neo4j graph retrieval and ETL
    evidence: Public ETL models/loaders and graph-backed character, skill, equipment, boss, and mechanic context.
  - name: LangGraph orchestration and bounded LLM analysis
    evidence: Public workflow graph with planning, retrieval, analysis, correction, and formatting boundaries.
  - name: Pydantic validation and SSE progress delivery
    evidence: Typed request/output contracts, legality checks, structured failure paths, and the FastAPI/HTMX streaming bridge.
disclosure:
  review_state: approved
  allowed_claims:
    - actively developed personal project status
    - public repository implementation visible at the reviewed source revision
    - graph ETL, Neo4j retrieval, LangGraph orchestration, typed validation, bounded retry/correction/fallback, and SSE progress
    - exploration of roster-constrained, source-grounded lineup recommendations
  excluded_claims:
    - production maturity or production readiness
    - completed evaluation or proven recommendation quality
    - live deployment or public service availability
    - guaranteed factuality or measured cost/performance improvement
    - claims based only on the repository's stale maturity wording
  maturity_boundary: Keep AnotherEdenAI labelled as actively developed until current evaluation and deployment gates are complete.
sources:
  - https://github.com/Hydarhafiz/AnotherEdenAI
  - https://github.com/Hydarhafiz/AnotherEdenAI/blob/main/src/etl/loader.py
  - https://github.com/Hydarhafiz/AnotherEdenAI/blob/main/src/workflow/graph.py
  - https://github.com/Hydarhafiz/AnotherEdenAI/blob/main/src/workflow/state.py
  - https://github.com/Hydarhafiz/AnotherEdenAI/blob/main/src/workflow/nodes/format.py
  - https://github.com/Hydarhafiz/AnotherEdenAI/blob/main/src/web/streaming.py
---

## Summary

AnotherEdenAI is an actively developed AI-assisted lineup recommendation system for the JRPG Another Eden. It combines graph retrieval, typed backend contracts, bounded analysis, and a streaming web path to explore how recommendation systems can stay grounded in structured evidence and a player's available roster.

## Context

The project is a personal engineering lab for graph-backed recommendation workflows. The public repository brings source data through an ETL boundary into Neo4j, then uses a web request and roster context to drive recommendation retrieval and analysis. The current work is as much about the reliability boundaries around AI output as it is about the recommendation itself.

## Problem

A natural-language recommendation system needs to connect a player's roster to structured game facts without allowing an unconstrained model response to become the final answer. The project explores a pipeline where graph retrieval supplies evidence, candidate preparation defines hard fields, and typed validation catches malformed or illegal output before it reaches the web layer.

## Pipeline

The public implementation has several explicit boundaries:

1. ETL models and loaders transform selected source data into an idempotent Neo4j graph.
2. The web layer accepts a query and roster context, while the workflow state keeps caller input and node-owned outputs separate.
3. LangGraph coordinates planning, context retrieval, query generation, validation, candidate preparation, analysis, and formatting.
4. Candidate preparation builds the hard-field recommendation boundary before analysis.
5. The formatter validates structured output and legality rules, including the required lineup shape and citation/risks fields.
6. FastAPI and HTMX/SSE stream node progress and render the final result or a typed failure path.

## Engineering decisions

- Use a graph as the retrieval surface so characters, skills, traits, equipment, bosses, and mechanics can be connected rather than flattened into one prompt.
- Keep workflow state typed and assign ownership of state fields to individual nodes so orchestration changes remain visible and testable.
- Put candidate preparation before free-form analysis so roster and legality constraints are established before the model explains a recommendation.
- Keep retry, correction, fallback, and structured-failure paths bounded so malformed retrieval or analysis does not silently become a confident result.
- Keep provider configuration behind interfaces so personal experiments can change models without rewriting workflow nodes.

## Reliability boundary

The public repository separates retrieval, candidate preparation, analysis, and formatting. Validation can retry a failed query within a fixed cap; analysis can be corrected within its bounded path; and the formatter rejects malformed, illegal, or fact-mismatched output rather than rendering it as a recommendation. The web layer receives progress events and a final typed result or failure classification.

## Current status

The repository contains implemented ETL, graph, workflow, validation, and streaming components, but the project remains actively developed. Current work includes evaluation, recommendation reliability, graph quality, cost control, and future demonstration/deployment decisions.

## Limitations

This case study does not claim production readiness, completed evaluation, proven recommendation quality, a live deployment, guaranteed factuality, or measured cost/performance improvement. The public repository's current opening uses stronger maturity language than this portfolio allows; this narrative follows the approved active-development boundary.

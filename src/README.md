# Home

## Setup command KPI

KPI (target_gte) for the on chain game can be:

```json
{"$eq":[{"sub":[{"$volume_of":"$address"},"$min_volume"]},0]}

target_gte = {"sub":[{"$volume_of":"$address"},"$min_volume"]}
```

KPI (target_gte) for gas manipulation:

```json
target_gte = {"sub":[{"$gas_price"},"$max_gas_price"]}
```

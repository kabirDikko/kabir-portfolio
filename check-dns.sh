#!/bin/bash

DOMAIN="kabirdikko.com"
GITHUB_IPS=(
    "185.199.108.153"
    "185.199.109.153" 
    "185.199.110.153"
    "185.199.111.153"
)

echo "Checking DNS configuration for $DOMAIN..."
echo "----------------------------------------"

# Get current A records
CURRENT_IPS=$(dig $DOMAIN +noall +answer | grep -v CNAME | awk '{print $5}')

echo "Current A records:"
for ip in $CURRENT_IPS; do
    echo "- $ip"
done

echo ""
echo "Checking for required GitHub Pages IPs:"
MISSING=0
for required_ip in "${GITHUB_IPS[@]}"; do
    if echo "$CURRENT_IPS" | grep -q "$required_ip"; then
        echo "✅ Found: $required_ip"
    else
        echo "❌ Missing: $required_ip"
        MISSING=1
    fi
done

echo ""
echo "Checking for extra non-GitHub IPs:"
EXTRA=0
for ip in $CURRENT_IPS; do
    if [[ ! " ${GITHUB_IPS[*]} " =~ " ${ip} " ]]; then
        echo "⚠️  Extra IP detected: $ip"
        EXTRA=1
    fi
done

echo ""
if [ $MISSING -eq 0 ] && [ $EXTRA -eq 0 ]; then
    echo "✅ DNS configuration looks correct for GitHub Pages!"
else
    echo "❌ DNS configuration needs to be updated."
    if [ $MISSING -eq 1 ]; then
        echo "   - Add missing GitHub Pages IP addresses"
    fi
    if [ $EXTRA -eq 1 ]; then
        echo "   - Remove extra non-GitHub IP addresses"
    fi
fi 